/**
 * year1-decisions.js - Bảng quyết định chi tiết Năm 1, giải thích dữ liệu & Bảng Cheat Sheet
 */
function renderDecisions() {
    const container = document.getElementById('tab-decisions');

    const decisions = [
        {
            num: "MỤC 1",
            name: "Thành lập nhà máy mới (Add New Factory)",
            choice: "KHÔNG CHỌN (0 nhà máy)",
            backup: "Tiền mặt = 0 AUD, đang nợ thấu chi 7.740 AUD. Xưởng Úc mới chạy 84.2% công suất.",
            reason: "Tránh vỡ nợ kỹ thuật và chi phí khấu hao mới. Để dành tiền sang Năm 2 mở xưởng Việt Nam (1.488.000 AUD).",
            outcome: "Tiết kiệm ngay 1.5M AUD vốn đầu tư và 182k khấu hao trong năm đầu."
        },
        {
            num: "MỤC 2",
            name: "Thâm nhập thị trường mới (Market Entry)",
            choice: "CHỌN: JAPAN (Nhật Bản)",
            backup: "Giá tham chiếu ở Nhật: Cà vạt 14 AUD, Sơ mi 24 AUD, Phụ kiện 35 AUD (cao hơn Úc). Ship Cat. 2 cực rẻ.",
            reason: "Thị trường công sở cao cấp, chuộng sự chỉn chu, biên lợi nhuận ròng trên mỗi sản phẩm cao hơn Úc 7% - 10%.",
            outcome: "Tăng thêm 300.000 - 400.000 AUD doanh thu, hấp thụ sạch công suất dư của xưởng Úc."
        },
        {
            num: "MỤC 3",
            name: "Nhà cung cấp nguyên liệu (Raw Materials)",
            choice: "STANDARD (Tiêu chuẩn) cho cả 3 món",
            backup: "Giá Standard rẻ hơn High-end từ 26% - 31% (Ties: 0.9 vs 1.3 | Shirts: 1.5 vs 2.1 | Acc: 1.4 vs 1.9).",
            reason: "Năm 1 mục tiêu sống còn là hạ giá thành sản xuất để phục hồi Gross Margin về mức 45%.",
            outcome: "Tiết kiệm trực tiếp 60.000 - 75.000 AUD chi phí mua nguyên liệu đầu vào."
        },
        {
            num: "MỤC 4",
            name: "Kế hoạch Sản xuất & Công nghệ",
            choice: "SX: Ties 155k | Shirts 24.5k | Acc 8.2k<br>Tech: 45.000 AUD | Bảo trì: 5.0%",
            backup: "Năm ngoái xưởng lỗi 19.8% làm mất 53.509 AUD. Công suất chạy chỉ 84.2%.",
            reason: "Ép xưởng chạy 96.4% để pha loãng định phí. Tăng Tech và Bảo trì để đè bẹp tỷ lệ phế phẩm.",
            outcome: "Kéo tỷ lệ lỗi từ 19.8% xuống dưới 9%, tiết kiệm 30.000 AUD chi phí hàng hỏng."
        },
        {
            num: "MỤC 5",
            name: "Định giá bán (Pricing Decisions)",
            choice: "Úc: 13 / 24 / 34 AUD<br>Nhật Bản: 14 / 25 / 35 AUD",
            backup: "Giá cũ tại Úc giữ vững 99% ý định mua Cà vạt. Giá tại Nhật bám sát giá tham chiếu nghiên cứu.",
            reason: "Không bán phá giá, không bán đắt hơn đối thủ. Giữ ổn định thị phần tại Úc và thâm nhập mượt mà vào Nhật.",
            outcome: "Bảo vệ 12.5% thị phần tại Úc và chiếm ngay 5% - 8% thị phần mới tại Nhật Bản."
        },
        {
            num: "MỤC 6",
            name: "Marketing & Phân bổ phân khúc",
            choice: "MKT Úc: 32k/18k/12k | MKT Nhật: 25k/15k/10k<br>Phân khúc Úc: 6-9-6 | Nhật: 8-5-8",
            backup: "Điểm phân khúc bắt buộc tổng = 21 điểm. Khách Úc chuộng Savers (giá tốt); Nhật chuộng Thiết kế & Brand.",
            reason: "Tập trung xúc tiến đúng phân khúc sở trường của từng thị trường thay vì chia đều 7-7-7 vô nghĩa.",
            outcome: "Tăng mạnh độ nhận diện Brand tại Nhật từ 0 lên 30 điểm; tối đa hóa doanh số bán Cà vạt tại Úc."
        },
        {
            num: "MỤC 7",
            name: "Ngân sách thiết kế sản phẩm",
            choice: "Ties: 28k | Shirts: 22k | Acc: 30k (Tổng 80k)",
            backup: "Điểm thiết kế cũ: Cà vạt cấp 4, Sơ mi cấp 3, Phụ kiện cấp 3.",
            reason: "Tăng nhẹ 8k ngân sách thiết kế để nâng cấp độ sản phẩm lên 1 bậc phục vụ thị trường Nhật.",
            outcome: "Đưa Cà vạt lên cấp 5, Sơ mi lên cấp 4; cải thiện điểm Product Innovation (+12% tỷ trọng)."
        },
        {
            num: "MỤC 8",
            name: "Đào tạo năng lực tổ chức",
            choice: "5.000 AUD cho mỗi bộ phận (Tổng 20k AUD)",
            backup: "Năm ngoái đầu tư 1k khiến điểm năng lực tụt dốc thảm hại (Quản trị mất 11.8 điểm).",
            reason: "Chặn đứng đà suy thoái năng lực tổ chức mà không làm đội chi phí nhân sự gián tiếp.",
            outcome: "Phục hồi điểm năng lực lên mốc 42 - 45 điểm; tăng năng suất và giảm chi phí vận hành."
        },
        {
            num: "MỤC 9",
            name: "Tài chính & Vay vốn (Financing)",
            choice: "VAY DÀI HẠN: 1.500.000 AUD (Lãi 5%)<br>VAY NGẮN HẠN: 0 AUD",
            backup: "Tiền mặt = 0, nợ phạt thấu chi 7.740 AUD (lãi phạt 10%). Xây xưởng Năm 2 cần 1.488.000 AUD.",
            reason: "Vay dài hạn trả dần trong 8 năm với lãi ưu đãi 5%. Xóa ngay nợ phạt và chuẩn bị sẵn tiền xây xưởng.",
            outcome: "Đưa tiền mặt từ 0 lên > 1.2M AUD; xóa sổ vĩnh viễn nguy cơ thấu chi phạt."
        }
    ];

    let html = `
        <div class="card" style="border-left: 4px solid var(--success);">
            <h3>📋 BẢNG TỔNG HỢP NHẬP SỐ SIÊU TỐC CHO FORM NĂM 1</h3>
            <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.88rem;">
                Mở màn hình nhập quyết định trong hệ thống giả lập và điền chính xác theo các thông số sau:
            </p>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Mục trong Form</th>
                            <th>Trường dữ liệu</th>
                            <th>Con số / Lựa chọn nhập vào</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Mục 1: Nhà máy mới</td><td>Tất cả trong một</td><td><strong>Không chọn (Tổng = 0)</strong></td></tr>
                        <tr><td>Mục 2: Thị trường mới</td><td>Quốc gia mục tiêu</td><td><strong>Chọn duy nhất: JAPAN (Nhật Bản)</strong></td></tr>
                        <tr><td>Mục 3: Nhà cung cấp</td><td>Cà vạt / Sơ mi / Phụ kiện</td><td><strong>STANDARD (Tiêu chuẩn) cho cả 3</strong></td></tr>
                        <tr><td>Mục 4: Sản lượng SX</td><td>Cà vạt / Sơ mi / Phụ kiện</td><td><strong>155.000 / 24.500 / 8.200</strong></td></tr>
                        <tr><td>Mục 4: Tech & Bảo trì</td><td>Công nghệ / Tỷ lệ bảo trì</td><td><strong>45.000 AUD / 5.0%</strong></td></tr>
                        <tr><td>Mục 5: Giá bán (Úc)</td><td>Cà vạt / Sơ mi / Phụ kiện</td><td><strong>13 / 24 / 34 AUD</strong></td></tr>
                        <tr><td>Mục 5: Giá bán (Nhật)</td><td>Cà vạt / Sơ mi / Phụ kiện</td><td><strong>14 / 25 / 35 AUD</strong></td></tr>
                        <tr><td>Mục 6: Quảng bá (Úc)</td><td>Cà vạt / Sơ mi / Phụ kiện</td><td><strong>32.000 / 18.000 / 12.000 AUD</strong></td></tr>
                        <tr><td>Mục 6: Quảng bá (Nhật)</td><td>Cà vạt / Sơ mi / Phụ kiện</td><td><strong>25.000 / 15.000 / 10.000 AUD</strong></td></tr>
                        <tr><td>Mục 6: Phân khúc Úc</td><td>Thiết kế / Kinh tế / Brand</td><td><strong>6 / 9 / 6 (Tổng = 21)</strong></td></tr>
                        <tr><td>Mục 6: Phân khúc Nhật</td><td>Thiết kế / Kinh tế / Brand</td><td><strong>8 / 5 / 8 (Tổng = 21)</strong></td></tr>
                        <tr><td>Mục 7: Thiết kế</td><td>Cà vạt / Sơ mi / Phụ kiện</td><td><strong>28.000 / 22.000 / 30.000 AUD</strong></td></tr>
                        <tr><td>Mục 8: Đào tạo</td><td>Quản lý / MKT / Design / Ops</td><td><strong>5.000 AUD cho mỗi bộ phận</strong></td></tr>
                        <tr><td>Mục 9: Vay vốn</td><td>Vay dài hạn / Vay ngắn hạn</td><td><strong>1.500.000 AUD / 0 AUD</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <h3>💡 Bóc Tách & Cơ Sở Luận Điểm Từng Quyết Định</h3>
    `;

    decisions.forEach(d => {
        html += `
            <div class="decision-card">
                <div class="decision-header">
                    <h4>${d.num}: ${d.name}</h4>
                    <span class="decision-badge">${d.choice}</span>
                </div>
                <div class="decision-detail"><strong>📊 Dữ liệu đối chiếu:</strong> ${d.backup}</div>
                <div class="decision-detail"><strong>🎯 Lý do chiến lược:</strong> ${d.reason}</div>
                <div class="decision-detail"><strong>🚀 Kết quả dự kiến:</strong> ${d.outcome}</div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}
