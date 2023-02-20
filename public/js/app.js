function App() {
const [products,setProducts] = React.useState([]);
React.useEffect(()=>{
    fetchProducts()
},[])
function fetchProducts() {
    fetch('/api/products')
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        setProducts(data);
    })
}
return (
        <ul className="list-group">
            {
                products.map((product) => <li key={product.id} className="list-group-item">{product.name}</li>)
            }           
        </ul>
)
}
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
<App />);