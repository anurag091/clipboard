const { deterministicPartitionKey } = require("./dpk");

/* 
candidate = crypto.createHash("sha3-512").update(data).digest("hex");
length of candidate after digest is 128, this is why I kept truncated length 128.
*/
// 128-character hexadecimal string
const hashregexFor128Charecter = /^[a-f0-9]{128}$/i;
const TRUNCATED_LENGTH = 128;

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('should return the provided partition key if it exists', () => {
    const event = {
      partitionKey: 'providedKey',
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(event.partitionKey);
  });

  it('should return the hashed value of the event if partition key is not provided', () => {
    const event = {
      data: 'example',
      timestamp: 1623162302,
    };
    const result = deterministicPartitionKey(event);
    console.log(result, result.length);
    expect(result).toMatch(hashregexFor128Charecter); 
  });

  it('should return the hashed value of the stringified event if partition key is not provided and event is not an object', () => {
    const event = 'just a string';
    const result = deterministicPartitionKey(event);
    
    expect(result).toMatch(hashregexFor128Charecter);
  });

  it('should return the trivial partition key if event is not provided', () => {
    const result = deterministicPartitionKey();
    expect(result).toBe('0');
  });

  it('should truncate the candidate partition key if it exceeds the maximum length', () => {
    const longString = 'a'.repeat(300);
    const event = {
      data: longString,
    };
    const result = deterministicPartitionKey(event);
    expect(result.length).toBe(TRUNCATED_LENGTH);
  });
});
