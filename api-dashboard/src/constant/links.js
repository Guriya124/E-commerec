import { ShoppingCart,  Users,   List,PlusSquare } from 'lucide-react'; 

export const Menulinks = [
    {
        title:'Dashboard',
        icon: ShoppingCart,
        link: '/'
    },
    {
        title:'Add Products',
        icon: PlusSquare,
        link: '/products'
    },

    {
        title:"Product List",
        icon: List,
        link: '/product-list'
    },
    {
        title:'Orders',
        icon: ShoppingCart,
        link: '/orders'
    },
    {
        title:'Customers',
        icon: Users,
        link: '/customers'
    },
    // {
    //     title: 'Profile',
    //     icon: User,
    //     link: '/profile'
    // },
    // {
    //     title: 'Logout',
    //     icon: LogOut,
    //     link: '/logout'
    // }
];
