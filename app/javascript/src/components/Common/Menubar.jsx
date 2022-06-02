// @ts-nocheck
import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

function Menubar({ title, setCategory, options }) {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <MenuBar showMenu={true} title={title}>
      {options?.heads?.map((head, idx) => (
        <MenuBar.Block
          label={head.title}
          key={idx}
          count={head.count}
          onClick={() => setCategory(head.title)}
        />
      ))}

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      {options?.segments?.map((segment, idx) => (
        <MenuBar.Block key={idx} label={segment.title} count={segment.count} />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      {options?.tags?.map((tag, idx) => (
        <MenuBar.Block key={idx} label={tag.title} count={tag.count} />
      ))}
    </MenuBar>
  );
}

export default Menubar;
