import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";

import { type NavbarProps } from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

export interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpenMenu(false);
    router.push(href);
  };

  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog as="div" className="z-50" onClose={setOpenMenu}>
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 backdrop-blur-md">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mt-20 w-full max-w-lg overflow-y-auto rounded-lg border border-border bg-background p-6 shadow-xl">
              <div className="flex flex-col space-y-4">
                {routes.map((link, i) => (
                  <button
                    key={i}
                    className={classNames(
                      pathName === link.href
                        ? "bg-accent/10 text-accent"
                        : "text-foreground hover:bg-muted",
                      "group flex w-full items-center rounded-md px-4 py-3 text-sm font-medium transition-colors",
                    )}
                    onClick={() => handleClick(link.href)}
                  >
                    {link.title}
                  </button>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
                ©2023 Norbert Frank Mba
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
