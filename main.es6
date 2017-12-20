import electron from 'electron';

export function activate() {
	let win = electron.remote.getCurrentWindow();
	win.setMenuBarVisibility(false);
	win.setAutoHideMenuBar(true);
}
