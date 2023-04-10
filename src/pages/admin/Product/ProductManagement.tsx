import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../../interfaces/product";
import { ICategory } from "../../../interfaces/category";
import { getCategories } from "../../../api/category";

const ProductManagementPage = (props) => {
  // const { categories, products, onRemove } = props;
  const [categories, setCategories] = useState<ICategory[]>([]);
  const removeProduct = (id: IProduct) => {
    if(confirm('Bạn có muốn xóa không?')){
      props.onRemove(id);
    }
  };
  const data = Array.isArray(props.products)
    ? props.products.map((item) => {
        const category = categories?.find((cat) => cat._id === item.categoryID);
        return {
          key: item._id,
          name: item.name,
          img: item.img,
          desc: item.desc,
          link: item.link,
          cate: category ? category.name : "",
        };
      })
    : [];
    console.log(data);
    
  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  interface DataType {
    key: string;
    name: string;
    img: string;
    desc: string;
    link: string,
    cate: string;
  }
  const columns: ColumnsType<DataType> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      width: "15%",
      render: (url: string) => <img src={url} alt="Image" style={{width: 80}}/>
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      width: "40%",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      width: "40%",
    },
    {
      title: "Categories",
      dataIndex: "cate",
      key: "cate",
      width: "30%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            style={{ backgroundColor: "red" }}
            type="primary"
            onClick={() => removeProduct(record.key)}
          >
            Remove
          </Button>
          <Button type="primary">
            <Link to={`/admin/products/${record.key}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
  );
};

export default ProductManagementPage;
