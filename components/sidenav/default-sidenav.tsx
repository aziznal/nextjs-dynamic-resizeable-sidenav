import SidenavLink from "../sidenav-link";

export default function DefaultSidenav() {
  return (
    <div className="flex h-full flex-col p-4">
      <h1 className="mt-2 ps-5 text-xl font-bold text-zinc-500">Home</h1>

      <div className="mt-4 flex flex-col gap-1">
        <SidenavLink href="/home">
          <span className="material-icons mr-1">home</span>
          Home
        </SidenavLink>

        <SidenavLink href="/link-1">
          <span className="material-icons mr-1">link</span>
          Link 1
        </SidenavLink>

        <SidenavLink href="/link-2">
          <span className="material-icons mr-1">link</span>
          Link 2
        </SidenavLink>

        <SidenavLink href="/link-3">
          <span className="material-icons mr-1">link</span>
          Link 3
        </SidenavLink>

        <SidenavLink href="/settings">
          <span className="material-icons mr-1">settings</span>
          Settings
        </SidenavLink>
      </div>
    </div>
  );
}
