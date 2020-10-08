import AboutDialog from "./dialogs/about";
import SettingsDialog from "./dialogs/settingsDialog";
import wX from "./wX";
import { locationPromise } from "./server";

/* This function adds the Wasabee options to the IITC toolbox */
export function setupToolbox() {
  const toolbox = document.getElementById("toolbox");

  const aboutLink = L.DomUtil.create("a", null, toolbox);
  aboutLink.href = "#";
  aboutLink.textContent = wX("ABOUT_WASABEE");
  L.DomEvent.on(aboutLink, "click", (ev) => {
    L.DomEvent.stop(ev);
    const ad = new AboutDialog();
    ad.enable();
  });

  const settingsLink = L.DomUtil.create("a", null, toolbox);
  settingsLink.href = "#";
  settingsLink.textContent = wX("SETTINGS");

  L.DomEvent.on(settingsLink, "click", (ev) => {
    L.DomEvent.stop(ev);
    const sd = new SettingsDialog();
    sd.enable();
  });

  const locationLink = L.DomUtil.create("a", null, toolbox);
  locationLink.textContent = wX("SEND_LOC");
  L.DomEvent.on(locationLink, "click", (ev) => {
    L.DomEvent.stop(ev);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          await locationPromise(
            position.coords.latitude,
            position.coords.longitude
          );
          alert(wX("LOC_PROC"));
        } catch (e) {
          console.error(e.toString());
        }
      },
      (err) => {
        console.error(err);
      }
    );
  });
}
