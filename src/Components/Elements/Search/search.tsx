import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ButtonContent, SearchButton } from "../../Header/style";
import SearchIcon from "../../Icons/SearchIcon";

import { Root, Input } from "./search.styled";

const Search: FC = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const hangleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Root onSubmit={hangleSearch}>
      <Input
        id="input"
        autoComplete="off"
        value={search}
        onChange={onTextChanged}
        type={"text"}
        placeholder="Search"
      />
      <SearchButton type="submit">
        <ButtonContent>
          <div
            style={{
              width: "18px",
              height: "18px",
              overflow: "hidden",
            }}
          >
            <SearchIcon />
          </div>
          <h4> Search</h4>
        </ButtonContent>
      </SearchButton>
    </Root>
  );
};

export default Search;
