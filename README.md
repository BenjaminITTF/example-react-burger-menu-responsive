# example-react-burger-menu-responsive


This is an example app demonstrating *responsive* sticky push-style [react-burger-menu](https://github.com/negomi/react-burger-menu).

## How to

 1. Clone and run

```bash
git clone https://github.com/ivan-aksamentov/example-react-burger-menu-responsive
cd example-react-burger-menu-responsive
yarn install
yarn dev



```

2. Wait webpack-dev-server to start and navigate to http://localhost:3000
3. Click "Toggle menu" button to toggle the menu.
4. Change viewport width: menu and toggle button will respond by appearing and disappearing

---

### Known issues

 - In sticky (large viewport) mode, main contents is translated from viewport and truncated, which is by-design for push-menu, but is not desirable in our example.

 - ESC key still closes the menu in sticky (large viewport) mode

---

Warning: sketchy code! For development purposes only.
