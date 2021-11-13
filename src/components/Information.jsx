/* modules */
import { TagIcon  } from "@heroicons/react/solid";
import { useState } from "react";

/* stylesheets */
import "../stylesheets/information.css";

/* contents */
import contents from '../assets/json/information.json';

/* values */
const tags = GenTagList(contents);

export default function Information() {
  const [checkedTags, setCheckedTags] = useState(["all"]);

  const HandleChange = tag => {
    if (tag === "all") {
      if (checkedTags.includes("all")) {
        setCheckedTags([]);
      } else {
        setCheckedTags(["all"]);
      }
    } else {
      if (checkedTags.includes(tag)) {
        setCheckedTags(checkedTags.filter(_tag => _tag !== tag));
      } else {
        let array = checkedTags.concat(tag);
        setCheckedTags(array.filter(_tag => _tag !== "all"));
      }
    }
  };

  const searchTags = tags => {
    for (const tag of tags) {
      if (checkedTags.includes("all") || checkedTags.includes(tag)) {
        return true;
      }
    }

    return false;
  };

  return(
    <>
      <h1 className="title">お知らせ</h1>

      <ul className="tags">
        <li key="all">
          <input type="checkbox" id="all" readOnly={true} checked={ checkedTags.includes("all") } onClick={ () => HandleChange("all") } />
          <label htmlFor="all">
            <TagIcon className="tag-icon" />
            <p>all</p>
          </label>
        </li>
        {
          tags.map( tag => {
            return(
              <li key="tag">
                <input type="checkbox" id={ tag } readOnly={true} checked={ checkedTags.includes(tag) } onClick={ () => HandleChange(tag) } />
                <label htmlFor={ tag }>
                  <TagIcon className="tag-icon" />
                  <p>{ tag }</p>
                </label>
              </li>
            );
          })
        }
      </ul>

      <ul className="information">
        {
          contents.map( x => {
            if (searchTags(x.tags) === true) {
              return(
                <li>
                  <span className="flex flex-row">
                    { x.tags.map( tag => {
                      return(
                        <span className="information-tags">
                          <TagIcon className="information-tag-icon" />
                          <p>{ tag }</p>
                        </span>
                      );
                    }) }
                  </span>
                  <p className="information-date">{ x.date }</p>
                  <p className="information-text">{ x.text }</p>
                </li>
              );
            }
          })
        }
      </ul>
    </>
  );
}

function GenTagList(contents) {
  let tags = contents.map( obj => { return(obj.tags); }).flat()

  return([...new Set(tags)]);
}