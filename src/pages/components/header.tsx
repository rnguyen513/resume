export function HeaderCell({text, href}:{text: string, href: string}) {
    return(
        <a href={href} className="font-bold md:text-xl text-white/80 text-sm ml-5 md:ml-10 first:ml-0">{text}</a>
    )
}

export default function Header() {
    return(
        <div className={"flex flex-row justify-start items-center bg-gray-200/50 ring-1 ring-gray-300/30 shadow-lg shadow-white/20 justify-start h-14 pl-5 shadow-md"}>
            <HeaderCell href="." text="Ryan Nguyen"></HeaderCell>
            <HeaderCell href="about" text="About"></HeaderCell>
            <HeaderCell href="resume" text="Resume"></HeaderCell>
            <HeaderCell href="projects" text="Projects"></HeaderCell>
            <HeaderCell href="contact" text="Contact"></HeaderCell>
        </div>
    )
}