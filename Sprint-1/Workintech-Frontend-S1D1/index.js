let vize, final, donemNotu, harfNotu;
vize = 50;
final = 100;

donemNotu = vize * 0.3 + final * 0.7;
if (donemNotu >= 90) {
  harfNotu = 'A';
} else if (donemNotu >= 80) {
  harfNotu = 'B';
} else if (donemNotu >= 70) {
  harfNotu = 'C';
} else if (donemNotu >= 60) {
  harfNotu = 'D';
} else if (donemNotu >= 50) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}
