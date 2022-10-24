import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controllers/onboarding_controller.dart';

class OnboardingPage extends StatelessWidget {
  final _controller = OnboardingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: [
            // PageView
            PageView.builder(
              controller: _controller.pageController,
                onPageChanged: _controller.selectedPageIndex,
                itemCount: _controller.OnboardingPages.length,
                itemBuilder: (context, index) {
                  return Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // image
                      Image.asset(
                          _controller.OnboardingPages[index].imageAsset),
                      const SizedBox(
                        height: 32,
                      ),
                      // title
                      Text(
                        _controller.OnboardingPages[index].title,
                        style: const TextStyle(
                            fontSize: 24, fontWeight: FontWeight.w500),
                      ),
                      const SizedBox(
                        height: 32,
                      ),
                      // description
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 64),
                        child: Text(
                          _controller.OnboardingPages[index].description,
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontSize: 18),
                        ),
                      ),
                    ],
                  );
                }),
            // BoxShape circle
            Positioned(
              bottom: 20,
              left: 20,
              child: Row(
                children: List.generate(
                  _controller.OnboardingPages.length,
                  (index) => Obx(() {
                    return Container(
                      margin: const EdgeInsets.all(4),
                      height: 12,
                      width: 12,
                      decoration: BoxDecoration(
                        color: _controller.selectedPageIndex.value == index
                            ? Colors.red
                            : Colors.grey,
                        shape: BoxShape.circle,
                      ),
                    );
                  }),
                ),
              ),
            ),
            // FloatButton
            Positioned(
              bottom: 15,
              right: 20,
              child: FloatingActionButton(
                elevation: 0,
                onPressed: _controller.forwardAction,
                child:  Obx((){ return Text(_controller.isLastPage ? 'Start' : 'Next',);})
              ),
            ),
          ],
        ),
      ),
    );
  }
}
