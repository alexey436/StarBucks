/**
 * Validation and formatting utilities for user forms (Name, Phone)
 */

// Filter and sanitize name inputs to allow ONLY Ukrainian & Latin letters, spaces, hyphens, and apostrophes.
// Digits and special symbols are strictly blocked.
export function filterNameInput(value: string): string {
  // Allow Ukrainian letters (а-я, А-Я, і, ї, є, ґ), Latin letters (a-z, A-Z), spaces, hyphens, and apostrophes
  return value.replace(/[^a-zA-Zа-яА-ЯіїєґІЇЄҐ'\s-]/g, '');
}

export function validateName(name: string): { isValid: boolean; error?: string } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: "Будь ласка, введіть ваше ім'я" };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: "Ім'я повинно містити щонайменше 2 літери" };
  }
  if (/\d/.test(trimmed)) {
    return { isValid: false, error: "Ім'я не може містити цифри" };
  }
  if (!/^[a-zA-Zа-яА-ЯіїєґІЇЄҐ'\s-]+$/.test(trimmed)) {
    return { isValid: false, error: "Ім'я може містити тільки літери" };
  }
  return { isValid: true };
}

/**
 * Formats phone number strictly starting with +380 in standard Ukrainian style:
 * +380 (XX) XXX-XX-XX
 * Letters and non-digit characters are blocked.
 */
export function formatUkrainianPhone(rawValue: string): string {
  // Extract only digits
  const rawDigits = rawValue.replace(/\D/g, '');

  if (!rawDigits || rawValue.trim() === '') {
    return '';
  }

  // Handle various prefixes like 380, 80, 0
  let subscriberDigits = rawDigits;
  if (subscriberDigits.startsWith('380')) {
    subscriberDigits = subscriberDigits.slice(3);
  } else if (subscriberDigits.startsWith('80')) {
    subscriberDigits = subscriberDigits.slice(2);
  } else if (subscriberDigits.startsWith('0')) {
    subscriberDigits = subscriberDigits.slice(1);
  }

  // A Ukrainian mobile/local number has 9 digits after 380 (e.g. 99 123 45 67)
  subscriberDigits = subscriberDigits.slice(0, 9);

  let formatted = '+380';

  if (subscriberDigits.length > 0) {
    const operator = subscriberDigits.slice(0, 2);
    formatted += ` (${operator}`;
    if (subscriberDigits.length >= 2) {
      formatted += ')';
    }
  }

  if (subscriberDigits.length > 2) {
    const part1 = subscriberDigits.slice(2, 5);
    formatted += ` ${part1}`;
  }

  if (subscriberDigits.length > 5) {
    const part2 = subscriberDigits.slice(5, 7);
    formatted += `-${part2}`;
  }

  if (subscriberDigits.length > 7) {
    const part3 = subscriberDigits.slice(7, 9);
    formatted += `-${part3}`;
  }

  return formatted;
}

export function validateUkrainianPhone(phoneValue: string): { isValid: boolean; error?: string } {
  const digits = phoneValue.replace(/\D/g, '');
  
  if (!digits || digits.length === 0) {
    return { isValid: false, error: 'Введіть номер телефону' };
  }

  // Total digits for 380XXXXXXXXX is 12 digits
  if (!digits.startsWith('380')) {
    return { isValid: false, error: 'Номер повинен починатися з +380' };
  }

  const subscriberDigits = digits.slice(3);
  if (subscriberDigits.length < 9) {
    return { 
      isValid: false, 
      error: `Введіть повний номер: залишилось ще ${9 - subscriberDigits.length} цифр` 
    };
  }

  return { isValid: true };
}
