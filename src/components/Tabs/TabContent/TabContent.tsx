import { useRef, createRef, LegacyRef, MutableRefObject, FC } from "react";
import { Data } from "src/constans/interfaces";
import {Props} from './interfaces'
import "./TabContent.css";

const TabContent : FC<Props> = ({ data }) : JSX.Element => {
  // Use Refs For Accessibility
  const tabRef: LegacyRef<HTMLDivElement> = createRef();
  const tabContentRef: MutableRefObject<LegacyRef<HTMLDivElement>> = useRef(tabRef);

  return (
    <div className="tab-content" ref={tabContentRef.current}>
      {data?.length ? (
        <ul className="tab-list">
          {(data as Array<Data>)?.map(({ id, webTitle } : Data , index : number) => (
            <li key={id} tabIndex={index}>
              {index + 1}. {webTitle}
            </li>
          ))}
        </ul>
      ) : (
        <span className="no-data">No Data Found !</span>
      )}
    </div>
  );
};

export default TabContent;
