import React from 'react';
import { toPng } from 'html-to-image';

function downloadImage(dataUrl) {
    const a = document.createElement('a'); // aタグを作成

    a.setAttribute('download', 'reactflow.png'); // ダウンロード時のファイル名を設定
    a.setAttribute('href', dataUrl); // ダウンロードするファイルのURLを設定
    a.click(); // クリックイベントを発生させる
}

function DownloadButton() {
    const onClick = () => {
        toPng(document.querySelector('.react-flow'), {
            filter: (node) => {
                // わたしたちは、ミニマップとコントロールを画像に追加したくありません。
                if (
                    node?.classList?.contains('react-flow__minimap') ||
                    node?.classList?.contains('react-flow__controls')
                ) {
                    return false;
                }

                return true;
            },
        }).then(downloadImage);
    };

    return (
        <button className="download-btn" onClick={onClick}>
            Download Image
        </button>
    );
}

export default DownloadButton;