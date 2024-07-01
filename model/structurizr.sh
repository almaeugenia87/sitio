#!/bin/sh

case "$1" in

  "--mac")
    SCRIPTPATH=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
    java -jar /Users/josesteva/Applications/structurizr-lite.war `echo $SCRIPTPATH` &> /dev/null &;;

  "--linux")
    SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
    java -Djdk.util.jar.enableMultiRelease=false -jar /opt/structurizr-lite.war `echo $SCRIPTPATH` &> /dev/null &;;

esac

STRUCTURIZR_PID=$!

sleep 1

echo "Para terminar el proceso ejecute: kill $STRUCTURIZR_PID"

# NOTA: Es necesario agregar un parámetro para indicar dónde está /structurizr-lite.war

case "$1" in

  "--mac")
    open -a "Google Chrome" http://localhost:8080;;

  "--linux")
    google-chrome http://localhost:8080;;

  *) echo "Debe especificar el sistema operativo:"
     echo "--mac: MacOS"
     echo "--linux: Linux";;

esac
