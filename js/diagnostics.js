/**
 * diagnostics.js - Render phân tích chuyên sâu các điểm nghẽn & Bóc tách BCTC
 */
function renderDiagnostics() {
    const container = document.getElementById('tab-diagnostics');
    const f = SIMULATION_DATA.financialSummary;

    container.innerHTML = `
        <div class="grid-4" style="margin-bottom: 24px;">
            <div class="metric-box">
                <label>Lợi nhuận ròng (Net Profit)</label>
                <div class="val text-danger">-8,088 AUD</div>
                <div class="note text-danger">Kỳ 2024: +179,424 AUD (-104.5%)</div>
            </div>
            <div class="metric-box">
                <label>Biên lợi nhuận gộp</label>
                <div class="val text-warning">38.0%</div>
                <div class="note text-danger">Mất -8.0% điểm phần trăm</div>
            </div>
            <div class="metric-box">
                <label>Tỷ lệ hàng phế phẩm</label>
                <div class="val text-danger">19.82%</div>
                <div class="note text-danger">Hỏng 32,509 SP (Mất 53,509 AUD)</div>
            </div>
            <div class="metric-box">
                <label>Tiền mặt & Tín dụng phạt</label>
                <div class="val text-danger">0 AUD</div>
                <div class="note text-danger">Nợ thấu chi 7,740 AUD (Lãi 10%)</div>
            </div>
        </div>

        <div class="grid-2">
            <div class="card">
                <h3>🔍 4 Điểm Nghẽn Trầm Trọng Bắt Buộc Sửa Đổi</h3>
                <div style="display: flex; flex-direction: column; gap: 14px; font-size: 0.88rem;">
                    <div>
                        <strong class="text-danger">1. Khủng hoảng cạn kiệt tiền mặt:</strong> 
                        Công ty đem chia cổ tức tới 80% (107k AUD) và trả nợ gốc dài hạn 169k AUD mà không có dòng tiền gối đầu, dẫn đến cháy sạch thanh khoản và dính thấu chi phạt 10%.
                    </div>
                    <div>
                        <strong class="text-danger">2. Ổ dịch hàng hỏng (Tỷ lệ lỗi 19.8%):</strong> 
                        Do bỏ bê ngân sách Công nghệ (chỉ có 12k) và Bảo trì xưởng (chỉ 2.5%), khiến 32.509 sản phẩm lỗi, đốt mất 53.509 AUD chi phí chất lượng.
                    </div>
                    <div>
                        <strong class="text-warning">3. Hiệu suất nhà máy kém (84.2%):</strong> 
                        Bỏ phí 15.8% công suất xưởng Úc, làm gánh nặng khấu hao (182k) và định phí gián tiếp (273k) đội giá thành đơn vị lên thêm 11% - 30%.
                    </div>
                    <div>
                        <strong class="text-warning">4. Bẫy độc canh thị trường Úc:</strong> 
                        100% doanh thu phụ thuộc Úc, bỏ trống các thị trường có sức mua và giá tham chiếu cao ngất ngưởng như Nhật Bản, Hàn Quốc.
                    </div>
                </div>
            </div>

            <div class="card">
                <h3>⚖️ So sánh Báo cáo Kết quả Kinh doanh (P&L)</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Chỉ số (AUD)</th>
                                <th>Năm 2024</th>
                                <th>Năm 2025</th>
                                <th>Chênh lệch</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Doanh thu (Revenue)</td>
                                <td>2,542,916</td>
                                <td>2,519,418</td>
                                <td class="text-danger">-23,498 (-0.9%)</td>
                            </tr>
                            <tr>
                                <td>Giá vốn (COGS)</td>
                                <td>1,309,042</td>
                                <td>1,492,164</td>
                                <td class="text-danger">+183,122 (+14.0%)</td>
                            </tr>
                            <tr>
                                <td>Lợi nhuận gộp (Gross Margin)</td>
                                <td>1,162,326</td>
                                <td>945,948</td>
                                <td class="text-danger">-216,378 (-18.6%)</td>
                            </tr>
                            <tr>
                                <td>Chi phí hoạt động (OPEX)</td>
                                <td>814,644</td>
                                <td>800,791</td>
                                <td class="text-success">-13,853 (-1.7%)</td>
                            </tr>
                            <tr>
                                <td>Khấu hao & Lãi vay</td>
                                <td>168,257</td>
                                <td>153,245</td>
                                <td>-15,012</td>
                            </tr>
                            <tr>
                                <td><strong>Lợi nhuận ròng (Net Result)</strong></td>
                                <td class="text-success"><strong>179,424</strong></td>
                                <td class="text-danger"><strong>-8,088</strong></td>
                                <td class="text-danger"><strong>-187,512 (-104.5%)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}
