import { Fragment, FC, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import aboutIcon from '../../assets/images/icons/about-icon.svg'
import projectsIcon from '../../assets/images/icons/projects-icon.svg'
import skillsIcon from '../../assets/images/icons/skills-icon.svg'
import blogIcon from '../../assets/images/icons/blog-icon.svg'

interface NavbarComponents {
  aboutRef: React.RefObject<any>;
  projectsRef: React.RefObject<any>;
  skillsRef: React.RefObject<any>;
  blogRef: React.RefObject<any>;
}

function classNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<NavbarComponents> = (props) => {
  const { projectsRef, skillsRef, aboutRef, blogRef } = props
  const dropDownItems = [
    {
      name: "About",
      icon: aboutIcon,
      alt: "About Nav Thumbnail",
      ref: aboutRef
    },
    {
      name: "Projects",
      icon: projectsIcon,
      alt: "Projects Nav Thumbnail",
      ref: projectsRef
    },
    {
      name: "Skills",
      icon: skillsIcon,
      alt: "Skills Nav Thumbnail",
      ref: skillsRef
    },
    // {
    //   name: "Blog",
    //   icon: blogIcon,
    //   alt: "Blog Nav Thumbnail",
    //   ref: blogRef
    // },

  ]
  const [showMenu, setShowMenu] = useState(false)

  const closeMenu = function () {
    setShowMenu(false)
  }

  const openMenu = function () {
    setShowMenu(true)
  }

  return (
    <>
      <nav className="fixed w-full h-12 flex items-center justify-end px-2 bg-navy-blue">
        {/* On Click nav appears */}
        <div onClick={() => { openMenu() }} className='rounded-lg px-3 py-2 flex justify-center items-center'>
          <Bars3Icon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        {
          showMenu && <div className='absolute top-[3.25rem] flex flex-col py-2 pl-4 pr-6 bg-navy-blue rounded-md '>
            {dropDownItems.map(function (item) {
              return (
              <div className='flex my-2' onClick={() => {
                item.ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
                closeMenu()
                }} >
                <img className='mr-5' alt={item.alt} src={item.icon}></img>
                <p className='select-none'>{item.name}</p>
              </div>
              )
            })}
          </div>
        }
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