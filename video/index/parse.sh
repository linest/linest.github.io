#!/bin/sh

cat $1 | sed ':a;N;$!ba;s/\n//g' | sed 's/]]>/\n/g' | sed 's/.*<\!\[CDATA\[//' | sed '$d' | sed '/^\s*$/d' > segments.data
cat segments.data