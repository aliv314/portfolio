import { Fragment, FC } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'

interface NavbarComponents {
  projectsRef: React.RefObject<any>;
  skillsRef: React.RefObject<any>;
  aboutRef: React.RefObject<any>;
  blogRef: React.RefObject<any>;
}

function classNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<NavbarComponents> = (props) => {
  const { projectsRef, skillsRef, aboutRef, blogRef } = props
  return (
    <>
      <nav className="fixed w-full h-12 flex items-center justify-end px-2 bg-navy-blue">
        
      </nav>
    </>
  );
};

export default Navbar;

{/* <div className='z-10 relative'>
          <Menu as="div" className="relative inline-block text-right">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <Bars3Icon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute bg-navy-blue right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <p className={
                        classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm select-none"
                        )} onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>
                        About
                      </p>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p className={
                        classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm select-none"
                        )} onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>
                        Projects
                      </p>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p className={
                        classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm select-none"
                        )} onClick={() => skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>
                        Skills
                      </p>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p className={
                        classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm select-none"
                        )} onClick={() => blogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>
                        Blog
                      </p>
                    )}
                  </Menu.Item>

                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div> */}