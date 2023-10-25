import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { IsletmeService } from "../services/IsletmeService";

export default function Categories() {
  const service = new IsletmeService();
  const [state, setState] = "";
  const [categories, setCategories] = useState(null);
  const handleItemClick = (name) => setState(name);

  async function categoryGetir() {
    let response = await service.getAllCategory();
    setCategories(response.data);
  }

  useEffect(() => {
    categoryGetir();
  }, []);

  if (categories === null) {
    return null;
  } else {
    return (
      <div>
        {categories.map((category) => {
          return (
            <div>
              <Menu pointing vertical>
                <Menu.Item
                  name={category.name}
                  active={state === category.name}
                  onClick={handleItemClick}
                  as={Link}
                  to="/"
                />
              </Menu>
            </div>
          );
        })}
      </div>
    );
  }
}
