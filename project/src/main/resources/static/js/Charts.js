
// Đợi DOM load xong
document.addEventListener('DOMContentLoaded', function() {
	// Dữ liệu biểu đồ
	const data = [
		{ month: "Tháng 1", revenue: 52000, expenses: 34000 },
		{ month: "Tháng 2", revenue: 48000, expenses: 34000 },
		{ month: "Tháng 3", revenue: 61000, expenses: 23000 },
		{ month: "Tháng 4", revenue: 55000, expenses: 65000 },
		{ month: "Tháng 5", revenue: 67000, expenses: 12000 },
		{ month: "Tháng 6", revenue: 72000, expenses: 25000 },
		{ month: "Tháng 7", revenue: 69000, expenses: 44000 },
		{ month: "Tháng 8", revenue: 78000, expenses: 76000 },
		{ month: "Tháng 9", revenue: 74000, expenses: 34000 },
		{ month: "Tháng 10", revenue: 82000, expenses: 64000 },
		{ month: "Tháng 11", revenue: 41000, expenses: 56000 },
		{ month: "Tháng 12", revenue: 45000, expenses: 56000 }
	];

	// Khởi tạo biểu đồ
	const ctx = document.getElementById('revenueChart');

	if (!ctx) {
		console.error('Canvas element with id "revenueChart" not found');
		return;
	}

	// Kiểm tra chế độ tối
	const isDarkMode = document.documentElement.classList.contains('dark');

	// Màu sắc cho chế độ sáng/tối
	const gridColor = isDarkMode ? 'rgba(100, 116, 139, 0.3)' : 'rgba(226, 232, 240, 0.3)';
	const textColor = isDarkMode ? '#94a3b8' : '#64748b';

	// Tạo gradient
	const revenueGradient = createGradient(ctx, ['#f97316', '#7c3aed']); // violet-600 to orange-500
	const expensesGradient = createGradient(ctx, ['#64748b', '#f1f5f9']); // slate-500 to slate-100
	const revenueChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: data.map(item => item.month),
			datasets: [
				{
					label: 'Thu',
					data: data.map(item => item.revenue),
					backgroundColor: revenueGradient,
					borderRadius: 4,
					barPercentage: 0.8,
				},
				{
					label: 'Chi',
					data: data.map(item => item.expenses),
					backgroundColor: expensesGradient,
					borderRadius: 4,
					barPercentage: 0.8,
				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
					titleColor: isDarkMode ? '#f1f5f9' : '#1e293b',
					bodyColor: isDarkMode ? '#cbd5e1' : '#475569',
					borderColor: isDarkMode ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 0.5)',
					borderWidth: 1,
					cornerRadius: 12,
					boxPadding: 6,
					usePointStyle: true,
					callbacks: {
						label: function(context) {
							let label = context.dataset.label || '';
							if (label) {
								label += ': ';
							}
							if (context.parsed.y !== null) {
								label += new Intl.NumberFormat('vi-VN', {
									style: 'currency',
									currency: 'VND'
								}).format(context.parsed.y);
							}
							return label;
						}
					}
				}
			},
			scales: {
				x: {
					grid: {
						display: false,
						drawBorder: false,
					},
					ticks: {
						color: textColor,
						font: {
							size: 12
						}
					}
				},
				y: {
					grid: {
						color: gridColor,
						drawBorder: false,
					},
					ticks: {
						color: textColor,
						font: {
							size: 12
						},
						callback: function(value) {
							return (value / 1000) + 'k';
						}
					}
				}
			}
		}
	});

	// Hàm tạo gradient
	function createGradient(ctx, colorStops) {
		const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
		gradient.addColorStop(0, colorStops[0]);
		gradient.addColorStop(1, colorStops[1]);
		return gradient;
	}

	// Dữ liệu biểu đồ
    const pieData = [
    	{ name: "Manga", value: 45, color: "oklch(70.5% 0.213 47.604)" },
    	{ name: "Tin học", value: 30, color: "oklch(54.1% 0.281 293.009)" },
    	{ name: "Tiểu thuyết", value: 15, color: "oklch(69.6% 0.17 162.48)" },
    	{ name: "Khác", value: 10, color: "oklch(62.3% 0.214 259.815)" }
    ];

    // Khởi tạo biểu đồ tròn
    const pieCtx = document.getElementById('salesChart');
    if (pieCtx) {
    	const isDarkMode = document.documentElement.classList.contains('dark');
    	const textColor = isDarkMode ? '#94a3b8' : '#64748b';

    	const salesChart = new Chart(pieCtx, {
    		type: 'doughnut',
    		data: {
    			labels: pieData.map(item => item.name),
    			datasets: [{
    				data: pieData.map(item => item.value),
    				backgroundColor: pieData.map(item => item.color),
    				borderWidth: 0,
    				borderRadius: 4,
    				spacing: 5,
    				hoverOffset: 8
    			}]
    		},
    		options: {
    			responsive: true,
    			maintainAspectRatio: false,
    			cutout: '60%',
    			plugins: {
    				legend: {
    					display: false
    				},
    				tooltip: {
    					backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    					titleColor: isDarkMode ? '#f1f5f9' : '#1e293b',
    					bodyColor: isDarkMode ? '#cbd5e1' : '#475569',
    					borderColor: isDarkMode ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 0.5)',
    					borderWidth: 1,
    					cornerRadius: 12,
    					boxPadding: 6,
    					usePointStyle: true,
    					callbacks: {
    						label: function(context) {
    							return `${context.label}: ${context.parsed}%`;
    						}
    					}
    				}
    			}
    		}
    	});
    }

    // Tạo HTML cho legend
    const legendContainer = document.createElement('div');
    legendContainer.className = 'space-y-3';
    legendContainer.innerHTML = pieData.map((item, index) => `
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="w-3 h-3 rounded-full" style="background-color: ${item.color}"></div>
                <span class="text-sm text-slate-600 dark:text-slate-400">${item.name}</span>
            </div>
            <div class="text-sm font-semibold text-slate-800 dark:text-white">${item.value}%</div>
        </div>
    `).join('');

    const pie = document.getElementById("pieChart-legend");
    pie.append(legendContainer);
});
