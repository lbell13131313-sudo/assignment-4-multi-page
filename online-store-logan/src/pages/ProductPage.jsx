import ProductCard from '../components/ProductCard' // allows us to use the Product Card function from ProductCard.jsx

function ProductPage({products, addToCart}) {
    return (
        <div>
            {/* location that the products link will send you to*/}
            <h3 id="products">Featured Products</h3>
            
            <div className="product-row">
                {/* supplies the props to the ProductCard function in ProductCard.jsx */}
                {/* much more condensed and reusable now than it was before */}
                {products.map(p => (
                    <ProductCard
                        identification={p.id}
                        name={p.name}
                        price={p.price}
                        image={p.image}
                        description={p.description}
                        onAddToCart={addToCart}
                    />
                )) }
            </div>
        </div>
    );
}

// Every component file must export the component
export default ProductPage;