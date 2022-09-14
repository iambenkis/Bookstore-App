import { FaUserCircle } from "react-icons/fa";
const NavBar = () => {
    return (
        <div className="navbar" style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding: '1rem 2rem',
            borderBottom:'1px solid #eee'
        }}>
            <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <h1 style={{
                color: 'var(--primary-color)',
                cursor:'pointer'
            }}>BookStore CMS</h1>
            <ul style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            marginLeft:'5rem'
        }}>
                <li>BOOKS</li>
                <li style={{
                    marginLeft: '1rem'
                }}>CATEGORIES</li>
            </ul>
        </div>
        <FaUserCircle style={{
            color: 'var(--primary-color)',
            fontSize:'2rem'
        }}/>
    </div>
    )
};

export default NavBar;