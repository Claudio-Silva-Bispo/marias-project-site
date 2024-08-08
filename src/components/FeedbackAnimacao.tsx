import React from 'react';
import dynamic from 'next/dynamic';
import FeedbackAnimationJson from '../../public/assets/feedbackAnimation.json';

// Carregamento dinâmico do Lottie sem SSR
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const FeedbackAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: FeedbackAnimationJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex justify-center items-center w-[100%] md:w-[100vh]">
            <Lottie options={defaultOptions} style={{ width: '70%', height: '100%' }} />
        </div>
    );
};
