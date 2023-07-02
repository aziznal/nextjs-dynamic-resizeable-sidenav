import SidenavLink from "../sidenav-link";

export default function SettingsSidenav() {
  return (
    <div className="flex h-full flex-col p-4">
      <h1 className="mt-2 ps-5 text-xl font-bold text-zinc-500">Settings</h1>

      <div className="mt-4 flex flex-col gap-1">
        <SidenavLink href="/home">Back</SidenavLink>
        <SidenavLink href="/link-1">Profile</SidenavLink>
        <SidenavLink href="/link-2">Security</SidenavLink>
        <SidenavLink href="/link-3">Misc</SidenavLink>
      </div>
    </div>
  );
}
