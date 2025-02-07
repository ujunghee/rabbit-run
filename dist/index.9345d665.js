$(document).ready(function() {
    // 딜레이 함수 정의
    const delay = (time)=>new Promise((resolve)=>setTimeout(resolve, time));
    // 섹션 1 애니메이션 실행
    const animateSection1 = async ()=>{
        $(".section_01 > .title").css({
            opacity: 1
        });
        await delay(300);
        $(".section_01 > .txt").css({
            opacity: 1
        });
        await delay(300);
        $(".section_01 > .rabbit_img").css({
            opacity: 1
        });
        await delay(300);
        $(".section_01 > .start_btn").css({
            opacity: 1
        });
    };
    // 섹션 전환 버튼 클릭 이벤트
    const handleStartClick = async ()=>{
        $(".section_01").css({
            top: "-100%"
        });
        $(".section_02").css({
            bottom: "0%"
        });
        await delay(500);
        $(".section_02 img").css({
            bottom: "0%"
        });
        await delay(500);
        $(".section_02").css({
            opacity: "0",
            "pointer-events": "none"
        });
        await delay(500);
        $(".start_page").css({
            display: "none"
        });
        $(".piggyback_btn").css({
            opacity: "1",
            animation: "size 1s ease-in-out"
        });
    };
    // 게임 화면 전환 버튼 클릭 이벤트
    const handleGamePuzzle = async ()=>{
        $(".game_page").css({
            opacity: "1",
            "pointer-events": "auto",
            background: "#31477345"
        });
        $(".main_page").css({
            filter: "blur(1rem)",
            "clip-path": "inset(0rem)"
        });
        await delay(100);
        $(".piggyback_btn").css({
            display: "none"
        });
    };
    // 퍼즐 게임 완료 버튼 클릭 이벤트
    const handlePuzzleComplete = async ()=>{
        $(".game_page").css({
            opacity: "0",
            "pointer-events": "none"
        });
        $(".main_page").css({
            filter: "none",
            "clip-path": "inset(0rem)"
        });
        $(".puzzle_game").css({
            display: "none"
        });
        await delay(500);
        $(".game_page").css({
            display: "none"
        });
        $(".piggyback_btn").css({
            opacity: "1",
            animation: "size 2s ease-in-out"
        });
        await delay(10);
        $(".go_page").css({
            opacity: "1"
        });
        $(".shiny_img").css({
            opacity: "1"
        });
        await delay(100);
        $(".piggyback_img").css({
            bottom: "120%",
            opacity: "1"
        });
        await delay(1000);
        $(".go_page > .transition").css({
            bottom: "0%",
            opacity: "1",
            "z-index": "1"
        });
        await delay(500);
        // .repeat_back 요소 표시
        $(".repeat_back").css({
            opacity: "1"
        });
        await delay(0);
        $(".repeat_back").css({
            top: "0%",
            transition: "top 3s"
        });
        $(".gopiggyback_img").css({
            display: "block"
        });
        $(".sea_img").css({
            display: "block"
        });
        await delay(800);
        $(".go_page > .transition").css({
            opacity: "0"
        });
        await delay(500);
        $(".gopiggyback_img").css({
            opacity: "0"
        });
        $(".repeat_img").css({
            opacity: "0"
        });
        $(".repeat_back").css({
            opacity: "0",
            transition: "all 1s cubic-bezier(0.56, 0, 0.07, 1.01)"
        });
        await delay(600);
        $(".propulsion_btn").css({
            bottom: "10%"
        });
        await delay(0);
        $(".piggyback_img").css({
            display: "none"
        });
        $(".game_page").css({
            display: "block"
        });
        $(".card_game").css({
            display: "block"
        });
    };
    // 카드게임 완료 버튼 클릭 이벤트
    const handleGameCard = async ()=>{
        $(".main_page").css({
            filter: "blur(1rem)",
            "clip-path": "inset(0rem)"
        });
        $(".game_page").css({
            opacity: "1",
            "pointer-events": "auto",
            background: "#31477345"
        });
    };
    const handleCardComplete = async ()=>{
        $(".game_page").css({
            opacity: "0",
            "pointer-events": "none"
        });
        $(".main_page").css({
            filter: "none",
            "clip-path": "inset(0rem)"
        });
        await delay(500);
        $(".zara_img").css({
            bottom: "110%",
            transition: "all 3s cubic-bezier(0.56, 0, 0.07, 1.01)"
        });
        $(".card_game").css({
            display: "none"
        });
        await delay(2000);
        $(".shore_img").css({
            opacity: "1"
        });
        await delay(1600);
        $(".rabbit_turtle_img").addClass("on");
        $(".sea_img").css({
            display: "none"
        });
        $(".rabbit_turtle_img .balloon_img2 > .btn").css({
            "pointer-events": "auto"
        });
        $(".transition").css({
            display: "none"
        });
    };
    const handleShoreBtn = async ()=>{
        $(".underwater_palace_img").css({
            display: "none"
        });
        $(".fix_txt").css({
            display: "none"
        });
        $(".fill_img").css({
            display: "flex"
        });
        $(".run_path").css({
            display: "none"
        });
        $(".shore_img").css({
            filter: "blur(1rem)",
            "clip-path": "inset(0rem)"
        });
        $(".game_page").css({
            opacity: "1",
            "pointer-events": "auto"
        });
        $(".run_game").css({
            display: "block"
        });
    };
    const handleRunBtn = async ()=>{
        $(".run_game").css({
            display: "none"
        });
        $(".fill_img").css({
            display: "none"
        });
        $(".game_page").css({
            opacity: "0",
            "pointer-events": "none"
        });
        $(".go_page").css({
            "pointer-events": "auto"
        });
        $(".shore_img").css({
            opacity: "0",
            filter: "none",
            "clip-path": "inset(0rem)",
            display: "none"
        });
        $(".thank_img").css({
            opacity: "1"
        });
        await delay(1500);
        $(".serai_img1").css({
            opacity: "0",
            display: "none"
        });
        $(".serai_img2").css({
            opacity: "1"
        });
        await delay(2000);
        $(".serai_img2").css({
            opacity: "0",
            display: "none"
        });
        $(".serai_img3").css({
            opacity: "1"
        });
    };
    const handleResetBtn = async ()=>{
        location.reload();
    };
    const handleHeritageClick = async ()=>{
        $(".game_page").css({
            opacity: "1",
            "pointer-events": "auto"
        });
        $(".heritage_popup").css({
            display: "block"
        });
        $(".thank_img").css({
            filter: "blur(1rem)",
            "clip-path": "inset(0rem)"
        });
    };
    const handleSolvek = async ()=>{
        $(".game_page").css({
            opacity: "1",
            "pointer-events": "auto"
        });
        $(".solvek_popup").css({
            display: "block"
        });
        $(".thank_img").css({
            filter: "blur(1rem)",
            "clip-path": "inset(0rem)"
        });
    };
    const handleCloseImg = async ()=>{
        $(".game_page").css({
            opacity: "0",
            "pointer-events": "none"
        });
        $(".thank_img").css({
            filter: "none",
            "clip-path": "inset(0rem)"
        });
        $(".solvek_popup").css({
            display: "none"
        });
        $(".heritage_popup").css({
            display: "none"
        });
    };
    // 초기화 및 이벤트 바인딩
    animateSection1();
    $(".start_btn").on("click", handleStartClick);
    $(".piggyback_btn").on("click", handleGamePuzzle);
    $("#puzzlegame_popup .complete_button").on("click", handlePuzzleComplete);
    $("#cardgame_popup .complete_button").on("click", handleCardComplete);
    $(".propulsion_btn").on("click", handleGameCard);
    $(".shore_img .btn").on("click", handleShoreBtn);
    $(".run_game .txt").on("click", handleRunBtn);
    $(".reset_btn").on("click", handleResetBtn);
    $(".heritage_click").on("click", handleHeritageClick);
    $(".solvek").on("click", handleSolvek);
    $(".close_img").on("click", handleCloseImg);
});
function last() {
    document.addEventListener("click", async function(event) {
        // 공유 버튼 클릭
        if (event.target.closest(".share")) {
            const shareData = {
                title: "\uD1A0\uB07C\uB7F0",
                text: "\uC6A9\uAD81\uC744 \uD0C8\uCD9C\uD560 \uAE30\uD68C\uB97C \uC5BB\uC740 \uD1A0\uC120\uC0DD, \uD1A0\uC120\uC0DD\uC774 \uBB34\uC0AC\uD788 \uB3C4\uB9DD\uCE60 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC8FC\uC2DC\uC624!",
                url: window.location.href
            };
            // 모바일 기기 체크
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (navigator.share) try {
                await navigator.share(shareData);
            } catch (err) {
                console.log("Share failed:", err);
            }
            else if (isMobile) {
                // 모바일인 경우 기본 공유 인텐트 사용
                const shareText = `${shareData.text}\n${shareData.url}`;
                window.location.href = `sms:?body=${encodeURIComponent(shareText)}`;
            } else // 데스크톱에서는 클립보드에 복사
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!");
            } catch (err) {
                alert("\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uACF5\uC720\uD558\uAE30\uAC00 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
            }
        }
    });
}

//# sourceMappingURL=index.9345d665.js.map
