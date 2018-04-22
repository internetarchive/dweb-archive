#!/bin/zsh

#
cd $(dirname $(realpath $0));
cd ../../;
echo -n "USING TREE/CONTEXT AT: "
pwd

source /petabox/sw/work/common.sh;

set -ex;

NAME=node-ia;
 HO="node.archive.org";


 IP=$(sql-nt "select ip  from box where fqhostname='$HO'");
MAC=$(sql-nt "select mac from box where fqhostname='$HO'");

if [ "$MAC" = ""  -o  "$IP" = "" ]; then
  echo "UHO -- $HO NOT IN BOX TABLE?"
  exit 0;
fi

echo "[$HO] [$IP] [$MAC]"

typeset -a PORTS; # array
for PORT in 80; do
  PORTS+=(-p $IP:$PORT:$PORT);
done


if ! $( docker images |egrep -qc '^node-ia '); then
  docker build -t $NAME -f includes/node/Dockerfile .;
fi


INTERFACE=br_phys;
ip addr add $IP/32 dev $INTERFACE;
set -x;
docker run -it --rm -h $HO --mac-address=$MAC $PORTS --name $NAME -v /home/tracey/petabox/www/sf/includes/node:/app/includes/node  $NAME
set +x;
ip addr del $IP/32 dev $INTERFACE;

# DETACH above with: CTRL-P CTRL-Q
# YOU CAN REATTACH LATER WITH:
#   docker exec -it $NAME
# YOU CAN ATTACH TO IT LATER WITH INTERACTIVE SHELL SIMPLY LIKE SO:
#   docker exec -it $NAME zsh
