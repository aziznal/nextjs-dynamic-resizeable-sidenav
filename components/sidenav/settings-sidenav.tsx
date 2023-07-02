import SidenavLink from "../sidenav-link";

export default function SettingsSidenav() {
  return (
    <div className="flex h-full flex-col p-4">
      <h1 className="mt-2 ps-5 text-xl font-bold text-zinc-500">Settings</h1>

      <div className="mt-4 flex flex-col gap-1">
        <SidenavLink href="/home">
          <span className="material-icons mr-1">arrow_left</span>
          Back
        </SidenavLink>

        <SidenavLink className="mt-4" href="/link-1">
          <span className="material-icons mr-1">person</span>
          Profile
        </SidenavLink>

        <SidenavLink href="/link-2">
          <span className="material-icons mr-1">shield</span>
          Security
        </SidenavLink>

        <SidenavLink href="/link-3">
          <span className="material-icons mr-1">dashboard</span>
          Misc
        </SidenavLink>
      </div>
    </div>
  );
}
