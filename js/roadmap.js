/**
 * roadmap.js - Lộ trình 7 năm để đưa công ty vươn lên dẫn đầu toàn game
 */
function renderRoadmap() {
    const container = document.getElementById('tab-roadmap');

    const stages = [
        {
            year: "NĂM 1",
            title: "Tái cơ cấu, Cứu dòng tiền & Dập dịch hàng lỗi",
            market: "Thâm nhập NHẬT BẢN (Japan) - Tận dụng giá tham chiếu cao",
            factory: "Chưa xây xưởng mới (Ép xưởng Úc chạy 96.4% công suất)",
            procurement: "Chọn toàn bộ nguyên liệu STANDARD (Cà vạt, Sơ mi, Phụ kiện)",
            finance: "Vay dài hạn 1.500.000 AUD (Lãi 5.0%), dẹp ngay thấu chi phạt 10%",
            badge: "Bản lề sống còn"
        },
        {
            year: "NĂM 2",
            title: "Xây xưởng VIỆT NAM & Đánh sập giá thành sản xuất",
            market: "Thâm nhập HÀN QUỐC (South Korea) - Nơi Cà vạt có giá đỉnh 18 AUD",
            factory: "XÂY NHÀ MÁY TẠI VIỆT NAM (Tổng chi phí 1.488.000 AUD)",
            procurement: "Tiếp tục Standard cho Ties để gom thị phần số lượng",
            finance: "Sử dụng tiền mặt dự trữ từ khoản vay Năm 1 để trả tiền xây xưởng",
            badge: "Bước ngoặt chiến lược"
        },
        {
            year: "NĂM 3",
            title: "Thâm nhập TRUNG QUỐC & Thống lĩnh sản lượng",
            market: "Thâm nhập TRUNG QUỐC (China) - Thị trường dân số & sức mua khổng lồ",
            factory: "Chạy tối đa cả 2 xưởng (Úc + Việt Nam)",
            procurement: "Standard cho Ties, xem xét High-end cho Sơ mi/Phụ kiện",
            finance: "Dòng tiền kinh doanh thặng dư dương, bắt đầu tự tài trợ hoạt động",
            badge: "Bùng nổ quy mô"
        },
        {
            year: "NĂM 4",
            title: "Nâng cấp Thiết kế & Bứt phá Giá trị Thương hiệu",
            market: "Củng cố 4 thị trường hiện hữu (Úc, Nhật, Hàn, Trung)",
            factory: "Nâng cấp Công nghệ công nghiệp (Industrial Tech) lên Level 8-10",
            procurement: "Chuyển Sơ mi & Phụ kiện sang HIGH-END để bán giá đắt",
            finance: "Bắt đầu trả bớt nợ gốc dài hạn, giảm chi phí lãi vay",
            badge: "Nâng tầm đẳng cấp"
        },
        {
            year: "NĂM 5",
            title: "Mở thị trường cuối cùng & Tối ưu hóa chuỗi giá trị",
            market: "Thâm nhập SINGAPORE (Hoàn thành tối đa 4 thị trường mở rộng)",
            factory: "Giữ vững công suất 2 xưởng, triệt tiêu tồn kho dư thừa",
            procurement: "Ties: Standard | Shirts & Complements: High-end",
            finance: "Biên lãi gộp đạt đỉnh > 50%, tiền mặt dồi dào",
            badge: "Tối ưu hóa"
        },
        {
            year: "NĂM 6 & 7",
            title: "Thu hoạch lợi nhuận kỷ lục (Harvesting) & Về đích",
            market: "Khai thác tối đa 5 thị trường, tối đa hóa doanh thu",
            factory: "Không xây thêm xưởng, tập trung bảo trì và tự động hóa",
            procurement: "Duy trì cấu trúc chi phí tối ưu",
            finance: "Trả sạch nợ ngân hàng, ROE đạt > 25%, Giá trị công ty đạt đỉnh tuyệt đối",
            badge: "Vô địch game"
        }
    ];

    let html = `
        <div class="card">
            <h3>🗺️ Kế Hoạch Tác Chiến 7 Năm (Master Strategy Roadmap)</h3>
            <p style="color: var(--text-secondary); margin-bottom: 20px; font-size: 0.9rem;">
                Chiến lược xây dựng trên nguyên tắc: <strong>Hạ giá thành sản xuất bằng xưởng Việt Nam + Bán giá cao tại các thị trường giàu Đông Á + Tối ưu điểm số Company Value.</strong>
            </p>
    `;

    stages.forEach(s => {
        html += `
            <div class="decision-card">
                <div class="decision-header">
                    <h4>${s.year}: ${s.title}</h4>
                    <span class="decision-badge">${s.badge}</span>
                </div>
                <div class="decision-detail"><strong>🌐 Thị trường:</strong> ${s.market}</div>
                <div class="decision-detail"><strong>🏭 Nhà máy:</strong> ${s.factory}</div>
                <div class="decision-detail"><strong>📦 Chuỗi cung ứng:</strong> ${s.procurement}</div>
                <div class="decision-detail"><strong>💰 Tài chính:</strong> ${s.finance}</div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}
