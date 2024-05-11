import SearchLogo from '../components/Search-logo';

export default function Header() {
    return (
        <div className="flex h-20 shrink-0 items-end rounded-b-lg bg-blue-500 p-4 md:h-52">
            <SearchLogo />
        </div>
    );
}