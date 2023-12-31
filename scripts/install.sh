#!/bin/sh

case "$1" in
'rm')
	if [ -n "$2" ]; then
		rm "$HOME"/.config/BetterDiscord/plugin/"$2"
		exit
	fi
	rm "$HOME"/.config/BetterDiscord/plugin/myplugin.plugin.js
	exit
;;
'')
	printf "Install plugin:\n  install.sh <plugin>\n"
	printf "Remove installed plugin:\n  install.sh rm [plugin=myplugin.plugin.js]\n"
	exit
;;
*)
	cp "$1" "$HOME"/.config/BetterDiscord/plugins/
	exit
;;
esac

