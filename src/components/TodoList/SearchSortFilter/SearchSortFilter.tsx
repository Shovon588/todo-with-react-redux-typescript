import { AiOutlineSearch } from "react-icons/ai";
import "./style.scss";

interface Props {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchSortFilter:React.FC<Props> = ({ query, setQuery}) => {
    return (
        <div className="search-sort-filter">
            <div className="search-div">
                <AiOutlineSearch className="remove-icon" />
                <input
                    type="text"
                    placeholder="Search your item"
                    className="search-input"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchSortFilter;
