const ItemListContainer = ({greeting}) => {
    return (
        <div className="container mt-4">
        <div className="jumbotron text-center animate__animated animate__fadeIn" style={{ backgroundColor: '#1111', color: '#123', transition: 'background-color 0.3s ease' }}>
          <h1 className="display-4" style={{ fontWeight:'bold' }} >{greeting}</h1>
      
        </div>
</div>
      );
};
 
export default ItemListContainer;