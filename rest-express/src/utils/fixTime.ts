const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function FixTime() {
  try {
    // Find records with invalid reading_time values
    const invalidRecords = await prisma.enregistrement.findMany({
      where: {
        OR: [
          {
            reading_time: {
              equals: new Date(0), // Replace with the invalid date value you want to filter
            },
          },
          {
            reading_time: {
              equals: new Date(0), // Replace with the invalid date value you want to filter
            },
          },
        ],
      },
    });

    // Correct the invalid records
    for (const record of invalidRecords) {
      // Replace the invalid reading_time with a valid datetime value
      const validReadingTime = new Date(); // Replace this with a valid date
      await prisma.enregistrement.update({
        where: { id: record.id },
        data: {
          reading_time: validReadingTime,
        },
      });
    }

    console.log('Invalid records fixed.');
  } catch (error) {
    console.error('Error fixing invalid records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

FixTime();
