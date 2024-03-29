const HeaderItem = ({title, Icon}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
            <Icon className="transform h-8 mb-1 group-hover:scale-125"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
