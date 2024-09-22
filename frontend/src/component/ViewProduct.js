const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      };
      fetchProducts();
    }, []);
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    );
  };
   