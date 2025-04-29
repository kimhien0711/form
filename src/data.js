function data(dataName) {
    switch (dataName) {
      case "products":
        const products = [
          {
            id: "1",
            name: "Awesome Soft Hat",
            name_category: "Thời trang nam",
            code: "1927-2453",
            image: "https://www.bing.com/ck/a?!&&p=bb9527d4acdbcb9df5050bdece417c1899b671d6f0f343ecbcc5c29458cf146eJmltdHM9MTc0NTc5ODQwMA&ptn=3&ver=2&hsh=4&fclid=20323689-f957-6ea3-3678-23bef8856f51&u=a1L2ltYWdlcy9zZWFyY2g_cT0lYzMlYTFvK25hbSZpZD03M0EwQjQ2MTU1MTQ4MEE4RUQ2REI1OTY2NzZFNUEwQkNDNzkyQjI2JkZPUk09SVFGUkJB&ntb=1",
            price: "234.00",
            old_price: "123.00",
          },
          {
            id: "2",
            name: "Awesome Soft Hat",
            name_category: "Thời trang nam",
            code: "2367-2453",
            image: "https://www.bing.com/ck/a?!&&p=bb9527d4acdbcb9df5050bdece417c1899b671d6f0f343ecbcc5c29458cf146eJmltdHM9MTc0NTc5ODQwMA&ptn=3&ver=2&hsh=4&fclid=20323689-f957-6ea3-3678-23bef8856f51&u=a1L2ltYWdlcy9zZWFyY2g_cT0lYzMlYTFvK25hbSZpZD03M0EwQjQ2MTU1MTQ4MEE4RUQ2REI1OTY2NzZFNUEwQkNDNzkyQjI2JkZPUk09SVFGUkJB&ntb=1",
            price: "234.00",
            old_price: "123.00",
          },
          {
            id: "3",
            name: "Awesome Soft Hat",
            name_category: "Thời trang nam",
            code: "1924-6453",
            image: "https://www.bing.com/ck/a?!&&p=bb9527d4acdbcb9df5050bdece417c1899b671d6f0f343ecbcc5c29458cf146eJmltdHM9MTc0NTc5ODQwMA&ptn=3&ver=2&hsh=4&fclid=20323689-f957-6ea3-3678-23bef8856f51&u=a1L2ltYWdlcy9zZWFyY2g_cT0lYzMlYTFvK25hbSZpZD03M0EwQjQ2MTU1MTQ4MEE4RUQ2REI1OTY2NzZFNUEwQkNDNzkyQjI2JkZPUk09SVFGUkJB&ntb=1",
            price: "234.00",
            old_price: "123.00",
          },
          {
            id: "4",
            name: "Awesome Soft Hat",
            name_category: "Thời trang nam",
            code: "1927-2453",
            image: "https://www.bing.com/ck/a?!&&p=bb9527d4acdbcb9df5050bdece417c1899b671d6f0f343ecbcc5c29458cf146eJmltdHM9MTc0NTc5ODQwMA&ptn=3&ver=2&hsh=4&fclid=20323689-f957-6ea3-3678-23bef8856f51&u=a1L2ltYWdlcy9zZWFyY2g_cT0lYzMlYTFvK25hbSZpZD03M0EwQjQ2MTU1MTQ4MEE4RUQ2REI1OTY2NzZFNUEwQkNDNzkyQjI2JkZPUk09SVFGUkJB&ntb=1",
            price: "234.00",
            old_price: "123.00",
          },
        ];
        return products;
        
      default:
        return [];
    }
  }
  
  export default data;
  