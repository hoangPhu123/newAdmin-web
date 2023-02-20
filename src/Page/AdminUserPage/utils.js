import { Tag } from "antd";

export const userColumn = [
  {
    title: "Account",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (text) => {
      if (text == "admin") {
        return <Tag style={{ color: "red" }}>Admin</Tag>;
      } else {
        return <Tag style={{ color: "blue" }}>User</Tag>;
      }
    },
  },
  {
    title: "Two Game",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Snake Game",
    dataIndex: "snake_score",
    key: "snake_score",
  },
  {
    title: "Fruit Ninja",
    dataIndex: "menja_score",
    key: "menja_score",
  },
  {
    title: "Color Blast",
    dataIndex: "color_blast_score",
    key: "color_blast_score",
  },
  {
    title: "Active",
    dataIndex: "action",
    key: "action",
  },
];
