import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";
import Conversations from "./Conversations";
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <Conversations />
        <div className="divider px-3"></div>
        <LogoutButton />
    </div>
  )
}

export default Sidebar;


//STARTER CODE
// import SearchInput from "./SearchInput";
// import LogoutButton from "./LogoutButton";
// import Conversations from "./Conversations";
// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//         <SearchInput />
//         <Conversations />
//         <div className="divider px-3"></div>
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar;
