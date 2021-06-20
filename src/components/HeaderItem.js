function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex flex-col w-12 sm:w-20 items-center hover:text-white cursor-pointer">
      <Icon className="h-8 mb-1 hover:animate-bounce" />
      <h1 className="opacity-0 transition duration-300 group-hover:opacity-100">
        {title}
      </h1>
    </div>
  );
}

export default HeaderItem;
