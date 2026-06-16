/**
 * 昭和学院SAコース 宮殿風Webページ
 * インタラクティブ演出スクリプト
 */

document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // 1. スクロールに応じたナビゲーションスタイル調整
  // ==========================================
  const header = document.querySelector(".palace-header");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ==========================================
  // 2. モバイルメニュー（ハンバーガー）制御
  // ==========================================
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      
      // ハンバーガーアイコンのトランスフォーム
      const spans = menuToggle.querySelectorAll("span");
      spans.forEach(span => span.classList.toggle("active"));
      
      // コード上での簡易切り替え表現
      if (navLinks.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // ナビゲーションメニュー押下時にSP版を閉じる
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  });

  // ==========================================
  // 3. スクロール時のフェードイン（Intersection Observer）
  // ==========================================
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // 一度表示したら監視を終了
      }
    });
  }, {
    threshold: 0.15, // 15%見えたらトリガー
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ==========================================
  // 4. ヒーローセクション スクロールボタンのアクション
  // ==========================================
  const scrollBtn = document.querySelector(".scroll-down");
  const conceptSection = document.getElementById("concept");

  if (scrollBtn && conceptSection) {
    scrollBtn.addEventListener("click", function () {
      conceptSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ==========================================
  // 5. 宮殿の八つの間（学問領域）ホバーインタラクション
  // ==========================================
  const labItems = document.querySelectorAll(".lab-item");

  labItems.forEach(item => {
    // マウスが乗った時に、ほのかな輝きを追加
    item.addEventListener("mouseenter", () => {
      item.style.boxShadow = "0 0 20px rgba(230, 184, 0, 0.35)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.4)";
    });
  });
  
});