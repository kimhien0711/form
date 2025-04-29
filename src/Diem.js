import React, { useState } from 'react';

function Diem() {
    const [diem, setDiem] = useState({
        toan: 0,
        ly: 0,
    });
    const [xl, setXL] = useState('');
    const [diemTB, setDiemTB] = useState(0);

    const onchange = (e) => {
        const { name, value } = e.target;
        setDiem((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
    };

    const tinhDiem = (e) => {
        e.preventDefault();
        const tb = ((diem.toan + diem.ly) / 2);
        setDiemTB(tb);

        if (tb >= 9) {
            setXL('Xuất Sắc');
        } else if (tb >= 8) {
            setXL('Giỏi');
        } else if (tb >= 6.5) {
            setXL('Khá');
        } else if (tb >= 5) {
            setXL('Trung Bình');
        } else {
            setXL('Yếu');
        }
    };

    return (
        <div>
            <h2>Điểm</h2>
            <form onSubmit={tinhDiem}>
                <label>
                    Điểm Toán:
                    <br />
                    <input type="number" name="toan" value={diem.toan} onChange={onchange} />
                </label>
                <br />
                <label>
                    Điểm Lý:
                    <br />
                    <input type="number" name="ly" value={diem.ly} onChange={onchange} />
                </label>
                <br />
                <button type="submit">OK</button>
            </form>
            <div>Điểm trung bình: {diemTB}</div>
            <div>Xếp loại: {xl}</div>
        </div>
    );
}

export default Diem;