document.addEventListener('DOMContentLoaded', function() {
    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
            case "pending":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "cancelled":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
        }
    }

    const recentOrders = [
        {
            id: "#1001",
            customer: "Mike Wilson",
            product: "Đắc Nhân Tâm",
            amount: "1",
            status: "completed",
            date: "2024-01-14",
        },
        {
            id: "#1002",
            customer: "Brian Bennet",
            product: "Nhà Giả Kim",
            amount: "2",
            status: "pending",
            date: "2024-01-14",
        },
        {
            id: "#1003",
            customer: "Alice Johnson",
            product: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
            amount: "1",
            status: "cancelled",
            date: "2024-01-14",
        },
        {
            id: "#1004",
            customer: "Eris Anderson",
            product: "Cà Phê Cùng Tony",
            amount: "3",
            status: "completed",
            date: "2024-01-14",
        },
    ];

    const topProducts = [
        {
            name: "Đắc Nhân Tâm",
            sale: 3421,
            revenue: "$865,755",
            trend: "down",
            change: "-3%",
        },
        {
            name: "Nhà Giả Kim",
            sale: 4546,
            revenue: "$1,251,450",
            trend: "up",
            change: "+12%",
        },
        {
            name: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
            sale: 5901,
            revenue: "$3,635,234",
            trend: "up",
            change: "+23%",
        },
        {
            name: "Cà Phê Cùng Tony",
            sale: 3636,
            revenue: "$242,460",
            trend: "up",
            change: "+3%",
        },
    ];

    recentOrders.forEach((order, index) => {
        let html = `
            <tr class='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all duration-200'>
                <td class='p-4'>
                    <span class='text-sm font-medium text-blue-500'>
                        ${order.id}
                    </span>
                </td>
                <td class="p-4">
                    <span class="text-sm text-slate-800 dark:text-white">
                        ${order.customer}
                    </span>
                </td>
                <td class="p-4 max-w-xs">
                    <span class="text-sm text-slate-800 dark:text-white line-clamp-2">
                        ${order.product}
                    </span>
                </td>
                <td class="p-4 text-center">
                    <span class="text-sm text-slate-800 dark:text-white">
                        ${order.amount}
                    </span>
                </td>
                <td class="p-4">
                    <span class='font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}'>
                        ${order.status}
                    </span>
                </td>
                <td class="p-4">
                    <span class="text-sm text-slate-800 dark:text-white">
                        ${order.date}
                    </span>
                </td>
                <td class="p-4">
                    <button class="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 dark:text-slate-300">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </button>
                </td>
            </tr>
        `;

        const table = document.getElementById('table-content');
        table.insertAdjacentHTML('beforeend', html);
    });

    topProducts.forEach((product) => {
        const html = `
            <div class="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200">
                <div class="flex-1">
                    <h4 class="text-sm font-semibold text-slate-800 dark:text-white">
                        ${product.name}
                    </h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400">
                        ${product.sale} đã bán
                    </p>
                </div>
                <div class="text-right">
                    <h4 class="text-sm font-semibold text-slate-800 dark:text-white">
                        ${product.revenue}
                    </h4>
                    <div class='flex items-center justify-end'>
                        ${product.trend === "up"
                            ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>`
                            : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500">
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                <polyline points="17 18 23 18 23 12"></polyline>
                            </svg>`
                        }
                        <p class="text-xs font-semibold ${product.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}">
                            ${product.change}
                        </p>
                    </div>
                </div>
            </div>
        `;

        const topProductsContainer = document.getElementById('top-product');
        topProductsContainer.insertAdjacentHTML('beforeend', html);
    });

    const activities = [
        {
            id: 1,
            type: "users",
            title: "New user registered",
            description: "Chi Bao created an account",
            time: "2 minutes ago",
            color: "text-blue-500",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
        },
        {
            id: 2,
            type: "order",
            title: "New order received",
            description: "Order #3001 for $2,999",
            time: "5 minutes ago",
            color: "text-emerald-500",
            bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
        },
        {
            id: 3,
            type: "payment",
            title: "Payment processed",
            description: "Payment of $1,999 completed",
            time: "12 minutes ago",
            color: "text-purple-500",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
        },
        {
            id: 4,
            type: "system",
            title: "System update",
            description: "Database backup completed",
            time: "1 hours ago",
            color: "text-orange-500",
            bgColor: "bg-orange-100 dark:bg-orange-900/30",
        },
        {
            id: 5,
            type: "notification",
            title: "Low stock alert",
            description: "Đắc Nhân Tâm stock is low",
            time: "2 hours ago",
            color: "text-red-500",
            bgColor: "bg-red-100 dark:bg-red-900/30",
        },
    ];

    const getActivityIcon = (type) => {
        const icons = {
            users: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>`,
            order: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>`,
            payment: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>`,
            system: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>`,
            notification: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>`
        };
        return icons[type] || icons.notification;
    };

    activities.forEach((activity) => {
        let html = `
            <div class='flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
                <div class='p-2 rounded-lg ${activity.bgColor} flex items-center justify-center'>
                    <span class='${activity.color}'>
                        ${getActivityIcon(activity.type)}
                    </span>
                </div>
                <div class='flex-1 min-w-0'>
                    <h4 class='text-sm font-bold text-slate-800 dark:text-white truncate'>
                        ${activity.title}
                    </h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400 truncate">
                        ${activity.description}
                    </p>
                    <div class="flex items-center space-x-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 dark:text-slate-300">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span class="text-xs text-slate-500 dark:text-slate-400">
                            ${activity.time}
                        </span>
                    </div>
                </div>
            </div>
        `;

        const feed = document.getElementById('active-feed');
        feed.insertAdjacentHTML('beforeend', html);
    });
});