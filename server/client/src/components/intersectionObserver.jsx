import { useState, useEffect } from "react";

const useIntersectionObserver = (targetRef, options, triggerOnce) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = targetRef.current;
    
    // Pastikan elemen ada
    if (!currentRef) return; 

    // Callback saat ada perubahan intersection
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Jika hanya ingin animasi terpicu sekali
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } 
        // Jika triggerOnce false, kita bisa set isVisible ke false saat keluar
        else if (!triggerOnce) {
            setIsVisible(false);
        }
      });
    };

    // Inisialisasi IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, options);

    // Mulai mengamati
    observer.observe(currentRef);

    // Cleanup: Matikan observer saat komponen di-unmount
    return () => {
      observer.unobserve(currentRef);
    };
  }, [targetRef, options, triggerOnce]); // Dependensi

  return isVisible;
};

export default useIntersectionObserver