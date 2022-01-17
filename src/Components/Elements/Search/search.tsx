import React, { ChangeEvent, FC, useState } from "react";

import {
  Root,
  Input,
  AutoCompleteContainer,
  AutoCompleteItem,
  AutoCompleteItemButton,
} from "./search.styled";

interface IData {
  name: string;
  code: string;
}

interface ISearch {
  data: any[];
}

const Search: FC<ISearch> = ({ data }) => {
  const [search, setSearch] = useState({
    text: "",
    suggestions: [],
  });

  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    let suggestions: any = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter((v: IData) => regex.test(v.name));
    }

    setIsComponentVisible(true);

    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: IData) => {
    setIsComponentVisible(false);

    setSearch({
      text: value.name,
      suggestions: [],
    });
  };

  return (
    <Root>
      <Input
        id="input"
        autoComplete="off"
        value={search.text}
        onChange={onTextChanged}
        type={"text"}
      />

      {search.suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteContainer>
          {search.suggestions.map((item: IData) => (
            <AutoCompleteItem key={item.code}>
              <AutoCompleteItemButton
                key={item.code}
                onClick={() => suggestionSelected(item)}
              >
                {item.name}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Root>
  );
};

export default Search;
