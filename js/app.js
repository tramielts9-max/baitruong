/**
 * app.js - Xử lý chuyển tab & khởi chạy toàn bộ Dashboard
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render nội dung cho toàn bộ các module
    renderDiagnostics();
    renderRoadmap();
    renderDecisions();
    renderReferenceData();

    // 2. Thiết lập cơ chế chuyển Tab
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');

    const tabMeta = {
        'tab-diagnostics': {
            title: 'Chẩn đoán hiện trạng & Bóc tách tài chính',
            subtitle: 'Phân tích chuyên sâu kết quả kinh doanh 2024 - 2025 và tìm ra các điểm nghẽn'
        },
        'tab-roadmap': {
            title: 'Chiến lược tổng thể 7 năm (Master Plan)',
            subtitle: 'Lộ trình thâm nhập thị trường, mở rộng xưởng sản xuất và thống lĩnh thị phần'
        },
        'tab-decisions': {
            title: 'Bảng quyết định chi tiết Năm 1',
            subtitle: 'Con số điền cụ thể, cơ sở lý luận số liệu và dự phóng kết quả vòng đầu tiên'
        },
        'tab-reference': {
            title: 'Tra cứu dữ liệu gốc & Quy định giả lập',
            subtitle: 'Bảng giá tham chiếu, cước phí vận tải, chi phí nhà máy và ma trận logistics'
        }
    };

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            navButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            if (tabMeta[targetTab]) {
                pageTitle.textContent = tabMeta[targetTab].title;
                pageSubtitle.textContent = tabMeta[targetTab].subtitle;
            }
        });
    });
});

/**
 * Render dữ liệu tham chiếu bổ trợ (Tab 4)
 */
function renderReferenceData() {
    const container = document.getElementById('tab-reference');

    let priceRows = '';
    SIMULATION_DATA.referencePrices.forEach(p => {
        priceRows += `
            <tr>
                <td><strong>${p.market}</strong></td>
                <td>${p.ties} AUD</td>
                <td>${p.shirts} AUD</td>
                <td>${p.accessories} AUD</td>
            </tr>
        `;
    });

    let factoryRows = '';
    SIMULATION_DATA.factoryCosts.forEach(f => {
        factoryRows += `
            <tr>
                <td><strong>${f.country}</strong></td>
                <td>${f.acquisition}</td>
                <td>${f.setup}</td>
                <td><strong class="text-success">${f.total}</strong></td>
            </tr>
        `;
    });

    container.innerHTML = `
        <div class="grid-2">
            <div class="card">
                <h3>🏷️ Giá Tham Chiếu Các Thị Trường (Reference Prices)</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Thị trường</th>
                                <th>Cà vạt (Ties)</th>
                                <th>Áo sơ mi (Shirts)</th>
                                <th>Phụ kiện (Accessories)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${priceRows}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card">
                <h3>🏭 Chi Phí Mở Xưởng Mới Theo Quốc Gia</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Quốc gia</th>
                                <th>Mua lại (Acquisition)</th>
                                <th>Thiết lập (Setup)</th>
                                <th>Tổng vốn đầu tư</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${factoryRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}
