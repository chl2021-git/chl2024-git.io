// script.js
document.getElementById("spinButton").addEventListener("click", function() {
    var wheel = document.getElementById("wheel");
    var resultText = document.getElementById("result");
    
    // 计算随机转动的角度
    var randomDegree = Math.floor(Math.random() * 360) + 3600; // 保证至少转动10圈
    var rotation = "rotate(" + randomDegree + "deg)";
    
    // 添加旋转动画
    wheel.style.transform = rotation;
    
    // 等待动画结束后显示结果
    setTimeout(function() {
        var prizeIndex = Math.floor((randomDegree % 360) / 60); // 每60度一个奖项
        var prizes = document.querySelectorAll(".section");
        var prize = prizes[prizeIndex].getAttribute("data-prize");
        resultText.textContent = "恭喜你，获得：" + prize;
    }, 4000); // 动画时间与CSS的transition时间一致
});
